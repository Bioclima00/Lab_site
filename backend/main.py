from fastapi import FastAPI

app = FastAPI()

@app.get("/api/news")
def get_lab_news():
    return {
        "status": "success",
        "data": [
            {"id": 1, "title": "课题组", "date": "2026-05-15"},
            {"id": 2, "title": "欢迎新成员加入", "date": "2026-05-10"}
        ]
    }
