// src/pages/Login.tsx
import React, { useState } from "react";
import styles from "../styles/Login.module.scss";
import illustration from "../assets/illustrations.svg"; // make sure the image path is correct

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>lendsqr</div>
        <img
          src={illustration}
          alt="login illustration"
          className={styles.illustration}
        />
      </div>

      <div className={styles.right}>
        <div className={styles.formBox}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <form>
            <input type="email" placeholder="Email" required />

            <div className={styles.passwordField}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>

            <a href="#" className={styles.forgotLink}>
              FORGOT PASSWORD?
            </a>
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
