function doGet(e) {
    return HtmlService.createHtmlOutput("GET request received - The script is working!");
}

function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Extract data from the request
    var data = e.parameter;
    var row = [];

    // Define internal names and human-readable headers
    var config = [
        { field: 'timestamp', label: 'Timestamp' },
        { field: 'principal_name', label: 'Principal Name' },
        { field: 'designation', label: 'Designation' },
        { field: 'email_id', label: 'Email ID' },
        { field: 'branch', label: 'Branch' },
        { field: 'session_progress_rating', label: 'Session Progress' },
        { field: 'session_regularity', label: 'Session Regularity' },
        { field: 'trainer_effectiveness', label: 'Trainer Effectiveness' },
        { field: 'teacher_deployment_satisfaction', label: 'Teacher Satisfaction' },
        { field: 'exhibition_prep_rating', label: 'Exhibition Prep' },
        { field: 'wizklub_day_status', label: 'Wizklub Day Conducted' },
        { field: 'exhibit_learning', label: 'Learning Exhibit' },
        { field: 'exhibit_confidence', label: 'Student Confidence' },
        { field: 'exhibit_engagement', label: 'Parent Engagement' },
        { field: 'exhibition_best_part', label: 'Best Part of Exhibition' },
        { field: 'recommend_wizklub', label: 'Would Recommend' },
        { field: 'renewal_expectation_v2', label: 'Renewal Expectation %' }
    ];

    // If the sheet is empty, add the headers first
    if (sheet.getLastRow() === 0) {
        var headers = config.map(function (item) { return item.label; });
        sheet.appendRow(headers);

        // Optional: Make headers bold
        sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f3f3f3");
    }

    // Map incoming data to the defined columns
    for (var i = 0; i < config.length; i++) {
        row.push(data[config[i].field] || "");
    }

    // Append row to the sheet
    sheet.appendRow(row);

    // Return success response
    return ContentService.createTextOutput("Success")
        .setMimeType(ContentService.MimeType.TEXT);
}
