// Add this to browser console on each page, or create browser extension
(function() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #2c3e50, #34495e);
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
            font-family: Arial, sans-serif;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        ">
            <p style="margin: 0; font-size: 16px;">
                © ${new Date().getFullYear()} <strong>Salim Niroula</strong>. All rights reserved.
            </p>
        </div>
    `;
    document.body.appendChild(footer);
})();