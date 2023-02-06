import "../home.css"

function home(){
    return(
        <div className="book-page-yellow">
        <div className="book-page-header">
          <h1>My Book Homepage</h1>
        </div>
        <div className="book-page-content">
          <div className="book-page-intro">
            <h2>Welcome to My Book Homepage!</h2>
          </div>
          <div className="book-page-items">
            <div className="book-page-item">
              <h3>My First Book</h3>
              <img src="https://th.bing.com/th/id/OIP.cjozGKBcuarTsOk5UaBRdgHaGo?pid=ImgDet&rs=1" alt="My First Book" />
              <p>
                This is the first book I ever wrote. It is about my journey as a
                writer and the lessons I have learned along the way.
              </p>
              <a href="#">Buy Now</a>
            </div>
            <div className="book-page-item">
              <h3>My Second Book</h3>
              <img src="https://th.bing.com/th/id/OIP.ovnHp_6JLblRFiDEfd3HeAHaFx?pid=ImgDet&w=1280&h=999&rs=1" alt="My Second Book" />
              <p>
                This is the second book I ever wrote. It is about my journey as an
                entrepreneur and the lessons I have learned along the way.
              </p>
              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="book-page-footer">
          <p>Copyright 2020 My Books</p>
        </div>
      </div>
    )
}

export default home