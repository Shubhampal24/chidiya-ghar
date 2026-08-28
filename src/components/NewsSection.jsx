export default function NewsSection() {
  return (
    <>
      <div className={"dh-news-section-wrap"}>
        {"\n\t\t"}
        <div className={"dh-news-header"}>
          {"\n\t\t\t"}
          <h3 className={"dh-news-title"}>{"Highlights"}</h3>
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
                src={"/image/free_parking.jpg"}
                alt={"Complimentary Parking"}
              />
              {"\n\t\t\t\t"}
            </div>
            {"\n\t\t\t\t"}
            <div className={"dh-news-body"}>
              {"\n\t\t\t\t\t"}
              <h2 className={"dh-news-card-title"}>
                <a href={"#"}>{"Complimentary Parking"}</a>
              </h2>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-meta"}>
                <span className={"dh-news-tag"}>{"Amenities"}</span>
              </p>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-excerpt"}>
                {
                  "Enjoy hassle-free, secure free parking available 24/7 for all residents and their guests at Chidiya Ghar."
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
              <img src={"/image/news-2.jpg"} alt={"Lush Green Surroundings"} />
              {"\n\t\t\t\t"}
            </div>
            {"\n\t\t\t\t"}
            <div className={"dh-news-body"}>
              {"\n\t\t\t\t\t"}
              <h2 className={"dh-news-card-title"}>
                <a href={"#"}>{"Lush Green Surroundings"}</a>
              </h2>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-meta"}>
                <span className={"dh-news-tag"}>{"Experience"}</span>
              </p>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-excerpt"}>
                {
                  "Step into a tranquil oasis where nature meets modern living. Our botanical details and beautiful greenery bring the outdoors inside for a serene atmosphere."
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
                src={"/wp-content/uploads/2022/08/House-with-Swimming-Pool-4.jpg"}
                alt={"Artistic & Warm"}
              />
              {"\n\t\t\t\t"}
            </div>
            {"\n\t\t\t\t"}
            <div className={"dh-news-body"}>
              {"\n\t\t\t\t\t"}
              <h2 className={"dh-news-card-title"}>
                <a href={"#"}>{"Artistic & Warm"}</a>
              </h2>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-meta"}>
                <span className={"dh-news-tag"}>{"Design"}</span>
              </p>
              {"\n\t\t\t\t\t"}
              <p className={"dh-news-excerpt"}>
                {
                  "Every corner of Chidiya Ghar is designed with love, offering a unique blend of premium aesthetics, warm Indian heritage, and cozy everyday comfort."
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
