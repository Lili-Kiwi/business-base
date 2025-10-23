
[GitHub Repository](https://github.com/Lili-Kiwi/business-base)

# Business Base

A React + Vite application for managing and viewing a list of businesses. Features include adding, editing, and updating business details, with a modern UI using styled-components.

## Features
- Add, edit, and update businesses
- Inline editing for business description
- Success notifications for actions
- Responsive, accessible design

## Dependencies
- **react**: UI library
- **react-dom**: DOM rendering
- **react-router-dom**: Routing
- **styled-components**: CSS-in-JS styling
- **react-icons**: Icon library

> No dependencies directly manipulate the DOM outside React's virtual DOM.

## Installation & Running
1. Clone the repository:
	```sh
	git clone https://github.com/Lili-Kiwi/business-base.git
	cd business-base/business-base
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Set up environment variables:
	- Create a `.env` file in the root directory with:
	  ```env
	  VITE_PAT=your_airtable_api_key
	  VITE_BASE_ID=your_airtable_base_id
	  VITE_TABLE_NAME=your_airtable_table_name
	  ```
	- These credentials are for Airtable API access.
4. Start the development server:
	```sh
	npm run dev
	```

## API Connection
- The app connects to the [Airtable API](https://airtable.com/api) to fetch and update business records.
- You must provide your own Airtable API key, base ID, and table name in the `.env` file.

## Credentials & Services
- **Airtable**: Used for data storage and API access. You need an Airtable account and an API key.
- No other external services require credentials.

## Notes
- For production, secure your API keys and restrict access as needed.
- If you add new dependencies that manipulate the DOM directly, document them here.