# IndoBERT Verify (AI-based Hoax Detection Application for Indonesian-language News)

## 👤 Author

| Name            | Role              | LinkedIn                                      |
|-----------------|-------------------|-----------------------------------------------|
| Jason Emmanuel  | Full-Stack Engineer    | [linkedin.com/in/jasoneml](https://www.linkedin.com/in/jasoneml/) |

IndoBERT Verify is an AI-powered system designed to detect hoaxes in Indonesian news articles. It leverages the power of the IndoBERT language model, which has been pre-trained specifically for the Indonesian language, making it well-suited for analyzing local news content.

This system enables users to receive real-time predictions, allowing instant feedback on whether a piece of text is likely to be a hoax or not. The fast response time makes it ideal for use in dynamic environments such as journalism, education, and public communication.

In addition to classification, IndoBERT Verify provides confidence scoring for each result. This score reflects how certain the model is about its prediction, giving users an added layer of insight and helping to assess the strength of the model’s judgment.

Finally, the system offers transparent explanations through attention-based interpretability. Using explainable AI techniques, IndoBERT Verify highlights which words influenced the prediction the most, making the model's reasoning more understandable and trustworthy for end users.

---

## ✨ Features

- 🔍 **Real-Time Hoax Detection**  
  Instantly classifies text as *hoax* or *non-hoax* using a fine-tuned IndoBERT model.

- 📊 **Confidence Scoring**  
  Displays probability scores for each class, making the output transparent and measurable.

- 🧠 **Explainable AI**  
  Integrates `transformers-interpret` to highlight which words influenced the model's decision.

- ⚡ **Vue.js Frontend**  
  Provides a fast, modern interface for inputting news snippets and viewing results.

- 🔬 **Trainable Backend**  
  Easily customizable to retrain with your own labeled dataset.

---

## 🏋️ Model Training

Model is trained using the [UMPO Hoax Dataset](https://github.com/) with the following pipeline:

1. **Data Cleaning** (remove URLs, symbols, hashtags)
2. **Label Encoding** using `LabelEncoder`
3. **Tokenization** with `AutoTokenizer.from_pretrained("indobenchmark/indobert-base-p1")`
4. **Training** via HuggingFace `Trainer` API
5. **Evaluation** with confusion matrix, precision, recall, F1-score

---

## 🚀 Backend (Flask + Transformers)

The backend is built using **Flask** and serves a fine-tuned IndoBERT model for hoax classification. It exposes a `/predict` endpoint that:

- Accepts raw text via a POST request.
- Returns a prediction (`0 = non-hoax`, `1 = hoax`).
- Provides a confidence score for each class.
- Uses `transformers-interpret` to highlight word-level attribution for explainability.

The backend also uses **Ngrok** to expose the local Flask server to a public URL, making it accessible from the frontend or external tools during development.

---

## 🌐 Frontend (Vue.js + Tailwind CSS)

The frontend is a **Vue.js** application built with **Vite** and styled using **Tailwind CSS**. It allows users to:

- Input news text manually.
- Send the text to the backend for classification.
- Display the predicted result with confidence scores.
- Visualize keyword influence using color-coded highlights (if implemented).

The frontend communicates with the Flask backend through API calls to the exposed Ngrok URL.

---

## 🖥️ Application Overview

![Screenshot 2025-06-19 200909](https://github.com/user-attachments/assets/eebfd17a-f316-4dd0-9c9f-7f650743a5ca)

The home page of the IndoBERT Verify application presents a sleek, dark-themed interface with orange accents that introduces users to its core purpose: detecting hoaxes in Indonesian news using the IndoBERT language model. At the top, it features a navigation bar with links to Home, News Detection, and About sections. The central hero section displays the app's name and a concise description emphasizing real-time, transparent, AI-powered hoax detection. Below that, three highlighted feature cards explain its key strengths which is AI-powered classification, real-time results, and confidence scoring. At the bottom, two prominent buttons invite users to either begin the detection process or learn more about the app, creating an intuitive and engaging entry point for new users.

![Screenshot 2025-06-19 200951](https://github.com/user-attachments/assets/32aaa483-f4c5-447c-b4a0-2fda551b3fd6)

The News Detection page of the IndoBERT Verify app allows users to input and analyze text to determine whether it's likely a hoax. In the screenshot example, a sample news article claiming NASA announced the sun will go dark for six days due to a “Galactic Blackout” is entered into the detection box. After clicking the “Detect” button, the system processes the input using a fine-tuned IndoBERT model and returns a prediction. In this case, the result displays a "Prediction: Likely Hoax" with a confidence score of 82.6%, indicating that the model strongly believes the news is not credible. Below the prediction

![Screenshot 2025-06-19 201005](https://github.com/user-attachments/assets/04019587-dd3c-4366-a16e-b1ce187dbba8)

The News Detection page of IndoBERT Verify not only displays the prediction result but also includes a powerful feature called Keyword Attributions, located just below the prediction section. This feature highlights individual words or phrases from the input text that had the most influence on the model's classification decision.

In the example shown, each highlighted word (e.g., NASA, padam, badai, fenomena) is visually marked in light brown tags, making it easy for users to identify which parts of the sentence contributed most to the “Likely Hoax” prediction. This interpretability component is powered by transformers-interpret, providing transparency and building user trust by showing how and why the model arrived at its conclusion. It helps users not only see the result, but understand the reasoning behind it.

![Screenshot 2025-06-19 201016](https://github.com/user-attachments/assets/f39f9b24-553b-4ccb-80c8-3ca1b1e99c9a)

The About Us page of the IndoBERT Verify application provides a concise overview of the project's purpose, technology, and creator. It explains that IndoBERT Verify is an AI-powered tool developed to detect hoaxes in Indonesian news articles, leveraging advanced natural language processing to deliver fast, accurate, and interpretable results. The page highlights the creator, Jason Emmanuel, a data science enthusiast committed to building practical AI solutions for social impact. It also outlines the core technologies used in the project, including Flask, Vue.js, Transformers (by Hugging Face), and the IndoBERT language model. Additionally, it invites users to explore the project's source code on GitHub and contribute to its development.

---

## 🧰 Tech Stack

| Technology              | Description                                                  |
|-------------------------|--------------------------------------------------------------|
| **Vue.js**              | Frontend framework for building interactive UIs              |
| **Tailwind CSS**        | Utility-first CSS framework for fast styling                 |
| **Vite**                | Lightning-fast frontend build tool and dev server            |
| **Flask**               | Lightweight Python backend framework for serving the API     |
| **Transformers**        | HuggingFace library for working with pre-trained NLP models  |
| **PyTorch**             | Deep learning framework used to fine-tune IndoBERT           |
| **Ngrok**               | Public URL tunneling for local Flask server                  |
| **Transformers-Interpret** | Visualize model's word-level decision impact             |
| **Scikit-learn**        | For classification metrics like accuracy and F1-score        |
| **Pandas**              | Data manipulation and preprocessing                          |

---

## 🖥️ Installation

```bash
git clone https://github.com/namoklom/indobert-verify.git
cd indobert-verify
```
