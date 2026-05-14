"use server";

import { google } from "googleapis";

export async function saveToSheet(formData) {
	try {
		const name = formData.get("fullName");
		const email = formData.get("email");
		const phone = formData.get("phone");
		const projectType = formData.get("projecttype");
		const message = formData.get("message");

		if (!name || !phone || !projectType) {
			return { error: "All fields required" };
		}
        
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(
			/\\n/g,
			"\n"
		).trim();
		const auth = new google.auth.JWT({
			email: process.env.GOOGLE_CLIENT_EMAIL,
			key: privateKey,
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		});
		await auth.authorize();
		const sheets = google.sheets({ version: "v4", auth });

		await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: "Sheet1!A:F",
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [
					[
						name,
						email,
						phone,
						projectType,
						message,
						new Date().toISOString(),
					],
				],
			},
		});

		return { success: true };
	} catch (err) {
		console.error(err);
		return { error: "Failed to save" };
	}
}
