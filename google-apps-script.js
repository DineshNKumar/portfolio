// ==========================================
// GOOGLE APPS SCRIPT - VISITOR TRACKING
// ==========================================

/*
SETUP INSTRUCTIONS:

1. Open Google Sheets and create a new spreadsheet
2. Name it "Portfolio Visitor Analytics" or any name you prefer
3. Go to Extensions > Apps Script
4. Delete any default code and paste this entire script
5. Click the disk icon to save
6. Click "Deploy" > "New deployment"
7. Select type: "Web app"
8. Execute as: "Me"
9. Who has access: "Anyone"
10. Click "Deploy"
11. Copy the Web App URL
12. Paste it in the analytics.js file (replace YOUR_GOOGLE_APPS_SCRIPT_URL_HERE)
13. Authorize the script when prompted

Your Google Sheet will have these columns:
- Timestamp
- IP Address
- City
- Region
- Country
- Country Code
- Latitude
- Longitude
- Timezone
- ISP
- User Agent
- Language
- Screen Resolution
- Referrer
- Page URL
*/

// Main function to handle POST requests
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // If this is the first entry, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'IP Address',
        'City',
        'Region',
        'Country',
        'Country Code',
        'Latitude',
        'Longitude',
        'Timezone',
        'ISP',
        'User Agent',
        'Language',
        'Screen Resolution',
        'Referrer',
        'Page URL'
      ]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 15);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#38BDF8');
      headerRange.setFontColor('#FFFFFF');
    }
    
    // Append the visitor data
    sheet.appendRow([
      data.timestamp,
      data.ip,
      data.city,
      data.region,
      data.country,
      data.countryCode,
      data.latitude,
      data.longitude,
      data.timezone,
      data.isp,
      data.userAgent,
      data.language,
      data.screenResolution,
      data.referrer,
      data.pageUrl
    ]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 15);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput('Visitor Tracking API is running. Use POST to send data.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Optional: Function to get visitor statistics
function getVisitorStats() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  const stats = {
    totalVisitors: data.length - 1, // Exclude header row
    uniqueIPs: [...new Set(data.slice(1).map(row => row[1]))].length,
    countries: [...new Set(data.slice(1).map(row => row[4]))],
    lastVisit: data[data.length - 1][0]
  };
  
  Logger.log(stats);
  return stats;
}
