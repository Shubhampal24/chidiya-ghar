export default function NewsSection() {
  return (
    <>
      <div className={"dh-news-section-wrap"}>
        {"\n\t\t"}
        <div className={"dh-news-header"}>
          {"\n\t\t\t"}
          <h3 className={"dh-news-title"}>{"News & Events"}</h3>
          {"\n\t\t\t"}
          <div className={"dh-news-divider"}></div>
          {"\n\t\t"}
        </div>
        {"\n\t\t"}
        <div className={"dh-news-grid"}>
          {"\n\t\t\t"}
          {"\n\t\t\t"}
          <article className={"dh-news-card"}>
            {"\n\t\t\t\t"}
            <div className={"dh-news-img-wrap"}>
              {"\n\t\t\t\t\t"}
              <img
                src={"wp-content/uploads/2022/08/House-with-Swimming-pool-2.jpg"}
                alt={"What is Lorem Ipsum? Where can I get some?"}
              />
              {"\n\t\t\t\t"}
            </div>
            {"\n\t\t\t\t"}
            <div className={"dh-news-body"}>
              {"\n\t\t\t\t\t"}
              <h2 className={"dh-news-card-title"}>
                <a href={"#"}>{"What is Lorem Ipsum? Where can I get some?"}</a>
              </h2>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-meta"}>
                {"Sep 2022 | "}
                <span className={"dh-news-tag"}>{"chidiya ghar"}</span>
              </p>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-excerpt"}>
                {
                  "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown.."
                }
              </p>
              {"\n\t\t\t\t"}
            </div>
            {"\n\t\t\t"}
          </article>
          {"\n\n\t\t\t"}
          {"\n\t\t\t"}
          <article className={"dh-news-card"}>
            {"\n\t\t\t\t"}
            <div className={"dh-news-img-wrap"}>
              {"\n\t\t\t\t\t"}
              <img src={"image/news-2.jpg"} alt={"What is Lorem Ipsum? Where does it come from?"} />
              {"\n\t\t\t\t"}
            </div>
            {"\n\t\t\t\t"}
            <div className={"dh-news-body"}>
              {"\n\t\t\t\t\t"}
              <h2 className={"dh-news-card-title"}>
                <a href={"#"}>{"What is Lorem Ipsum? Where does it come from?"}</a>
              </h2>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-meta"}>
                {"Aug 2022 | "}
                <span className={"dh-news-tag"}>{"chidiya ghar"}</span>
              </p>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-excerpt"}>
                {
                  "Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer..."
                }
              </p>
              {"\n\t\t\t\t"}
            </div>
            {"\n\t\t\t"}
          </article>
          {"\n\n\t\t\t"}
          {"\n\t\t\t"}
          <article className={"dh-news-card"}>
            {"\n\t\t\t\t"}
            <div className={"dh-news-img-wrap"}>
              {"\n\t\t\t\t\t"}
              <img
                src={"wp-content/uploads/2022/08/House-with-Swimming-Pool-4.jpg"}
                alt={"What is Lorem Ipsum? Why do we use it?"}
              />
              {"\n\t\t\t\t"}
            </div>
            {"\n\t\t\t\t"}
            <div className={"dh-news-body"}>
              {"\n\t\t\t\t\t"}
              <h2 className={"dh-news-card-title"}>
                <a href={"#"}>{"What is Lorem Ipsum? Why do we use it?"}</a>
              </h2>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-meta"}>
                {"Aug 2022 | "}
                <span className={"dh-news-tag"}>{"chidiya ghar"}</span>
              </p>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-excerpt"}>
                {
                  "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.."
                }
              </p>
              {"\n\t\t\t\t"}
            </div>
            {"\n\t\t\t"}
          </article>
          {"\n\t\t"}
        </div>
        {"\n\t"}
      </div>
    </>
  );
}
