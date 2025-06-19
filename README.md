# IndoBERT Verify 🇮🇩🧠

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
