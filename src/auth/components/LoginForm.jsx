import React, { useState, useEffect } from "react";
import RoleSelector from "./RoleSelector";
import "./login.css";
import Button from "../../components/common/Button";

export default function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("apprenant");

  const filled = email.trim() !== "" && password.trim() !== "";

  useEffect(() => {
    // placeholder to update anything when role changes
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Role:", role);
    console.log("Email:", email);
    console.log("Password:", password);
    if (onClose) onClose();
  };

  return (
    <div className="login-container" role="dialog" aria-label="Accès à votre Compte">

      <div className="title-row">
        <h1 className="login-title">Accès à votre Compte</h1>
        <img src="/vector.svg" alt="Login Icon" className="login-icon" />
      </div>
      <div className="decorative-lines" />
      <div className="role-selector-wrap">
        <div className="side-line" aria-hidden="true" />
        <RoleSelector value={role} onChange={setRole} />
        <div className="side-line" aria-hidden="true" />
      </div>

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-input"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Mot de passe"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((s) => !s)}
            aria-pressed={showPassword}
            title={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            {showPassword ? (
              <img src="/assets/icons/micro/open_eye.svg" alt="Show password" />
            ) : (
              <img src="/assets/icons/micro/closed_eye.svg" alt="Hide password" />
            )}
          </button>
        </div>

        <Button variant="ghost" class="btn--ghost" style={{ width: "100%", height: "36px", gap: "16px" }} type="submit" disabled={!filled}>
          Se connecter
        </Button>
      </form>

      <div className="forgot-password">
        <a href="#" style={{width:"50%", height:"20px"}}>Mot de passe oublié ?</a>
      </div>
    </div>
  );
}
