import { NavLink } from "react-router-dom";
import styles from "./notFound.module.css";
function NotFoundPage() {
  return (
    <section className={`${styles.page_404} h-[100vh] text-green-950`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full">
            <div
              className="w-full max-w-5xl mx-auto text-center"
            >
              <div className={styles.four_zero_four_bg}>
                <h1 className="text-center">404</h1>
              </div>

              <div className={styles.content_box_404}>
                <h3 className={styles.h2}>Look like you're lost</h3>

                <p>the page you are looking for not available!</p>

                <NavLink to="/" className={styles.link_404}>
                  Go to Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
