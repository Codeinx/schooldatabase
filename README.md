School Database Application

A simple web-based application to store, organize, and display student data. This application allows users to group students by class, filter them by graduation year, and view a dashboard of school statistics.

Features

	1.	Student Management:
	•	Store detailed information about each student (e.g., name, class, graduation year).
	2.	Class Organization:
	•	Automatically organize students into classes.
	3.	Filter Students:
	•	Filter students based on their graduation year.
	4.	Dashboard (Optional):
	•	View the total number of students, current students, and graduates.

Technologies Used

	•	HTML: For structuring the web application.
	•	CSS: For styling and layout design.
	•	JavaScript: For dynamic functionalities (data handling, filtering, and rendering).

Folder Structure

school-database/
│
├── index.html       # Main HTML file
├── style.css        # CSS file for styles
├── app.js           # JavaScript file for functionality
└── assets/          # (Optional) Folder for images or icons

How to Run the Application

	1.	Clone or Download the Repository:

git clone https://github.com/your-username/school-database.git


	2.	Navigate to the Project Directory:

cd school-database


	3.	Open the Application:
	•	Double-click on the index.html file in your file manager.
	•	OR serve the project using a local server like Live Server in VS Code.

Usage

	1.	View the Dashboard for:
	•	Total students.
	•	Separation of current students and graduates.
	2.	Navigate to the Classes Section to see all students grouped by their classes.
	3.	Use the Filter Students section to filter students by graduation year.

Sample Data

The app uses a predefined set of students stored in the app.js file. Modify or add more students to the array to customize the application.

Example:

const students = [
  { id: 1, name: "Alice", class: "A", graduationYear: 2024 },
  { id: 2, name: "Bob", class: "B", graduationYear: 2025 },
  { id: 3, name: "Charlie", class: "A", graduationYear: 2023 },
];

Future Enhancements

	•	Add a backend system (Node.js, Python, etc.) to store data in a database.
	•	Allow dynamic student entry through a form.
	•	Implement search functionality to find specific students by name.
	•	Enhance the UI with frameworks like Bootstrap or Tailwind CSS.

Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Author

Developed by Aseyege Dominion.

For questions or feedback, feel free to reach out at aseyeged@gmail.com.

Let me know if you want me to include any specific sections!
