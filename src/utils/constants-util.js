const welcomeMsg = {
  status: 200,
  message: "Welcome to the Secure Authentication API!",
  description:
    "Our API ensures top-notch security to safeguard your data. Whether you need to authenticate users or manage access control, we provide reliable, fast, and secure solutions for your applications.",
  features: [
    "Robust authentication mechanisms with encryption.",
    "Token-based authentication (JWT) for session management.",
    "Session-based social login for seamless integration with platforms like Google, Github, etc.",
    "Role-based access control (RBAC) for fine-grained permissions.",
    "Content Security Policy (CSP) to prevent cross-site scripting attacks.",
    "Cross-Site Request Forgery (CSRF) protection for secure data transmission.",
    "Secure cookies to prevent unauthorized access and tampering.",
    "Password protection with hashing algorithms like bcrypt for secure storage.",
  ],
  tips: [
    "Use HTTPS for all API requests to enhance security.",
    "Ensure tokens are securely stored and managed on the client side.",
    "Regularly update passwords and authentication keys for better protection.",
    "Enable CSP headers to reduce the risk of XSS attacks.",
    "Use secure and HttpOnly flags for cookies to prevent client-side access.",
  ],
  timestamp: new Date().toISOString(),
  api_version: "1.0.0",
};

const cookie_options = {
  httpOnly: true,
  secure: true,
  signed: true,
};

// exports
export { welcomeMsg, cookie_options };
