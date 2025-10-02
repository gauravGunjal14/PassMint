function Features() {
    return (
        <section className="features">
            <h3>Why use PassMint?</h3>
            <div className="card-container">
                <div className="feature-card">
                    <img src="https://img.icons8.com/stickers/100/maintenance.png" />
                    <h4>Customize Password Length</h4>
                    <p>Create passwords that match your exact needs. Whether you want a quick 8-character password or a highly secure 50-character string, PassMint gives you complete control.</p>
                </div>
                <div className="feature-card">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                        <path d="M19.5,95C13.71,95,9,90.29,9,84.5v-41C9,37.71,13.71,33,19.5,33h0.89C22.798,17.722,36.056,6,52,6 s29.202,11.722,31.61,27h0.89C90.29,33,95,37.71,95,43.5v41C95,90.29,90.29,95,84.5,95H19.5z" opacity=".35"></path><path fill="#f2f2f2" d="M17.5,93C11.71,93,7,88.29,7,82.5v-41C7,35.71,11.71,31,17.5,31h0.89C20.798,15.722,34.056,4,50,4 s29.202,11.722,31.61,27h0.89C88.29,31,93,35.71,93,41.5v41C93,88.29,88.29,93,82.5,93H17.5z"></path><path fill="#9aa2e6" d="M82.5,37.5h-7V36c0-14.083-11.417-25.5-25.5-25.5S24.5,21.917,24.5,36v1.5h-7c-2.209,0-4,1.791-4,4 v41c0,2.209,1.791,4,4,4h65c2.209,0,4-1.791,4-4v-41C86.5,39.291,84.709,37.5,82.5,37.5z M31.5,36c0-10.201,8.299-18.5,18.5-18.5 S68.5,25.799,68.5,36v1.5h-37V36z"></path><path fill="#ffc571" d="M82.5,87h-65c-2.209,0-4-1.791-4-4V43c0-2.209,1.791-4,4-4h65c2.209,0,4,1.791,4,4v40 C86.5,85.209,84.709,87,82.5,87z"></path><path fill="none" stroke="#40396e" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M82.5,37.5h-7V36c0-14.083-11.417-25.5-25.5-25.5S24.5,21.917,24.5,36v1.5h-7c-2.209,0-4,1.791-4,4v41c0,2.209,1.791,4,4,4h65 c2.209,0,4-1.791,4-4v-41C86.5,39.291,84.709,37.5,82.5,37.5z M31.5,36c0-10.201,8.299-18.5,18.5-18.5S68.5,25.799,68.5,36v1.5h-37 V36z"></path><circle cx="50" cy="58" r="6" fill="#40396e"></circle><rect width="6" height="11" x="47" y="62" fill="#40396e"></rect>
                    </svg>
                    <h4>Flexible Options</h4>
                    <p>Easily include or exclude uppercase letters, lowercase letters, numbers, and symbols. This flexibility ensures your password meets the requirements of any website or system.</p>
                </div>
                <div className="feature-card">
                    <img src="https://img.icons8.com/stickers/100/documents--v1.png"/>
                    <h4>One-Click Copy</h4>
                    <p>No need to highlight and copy manually. With just one click, your freshly minted password is copied to your clipboard, ready to use anywhere.</p>
                </div>
                <div className="feature-card">
                    <img src="https://img.icons8.com/stickers/100/remove-fingerprint.png"/>
                    <h4>Choose mode</h4>
                    <p>Select your desired password strength (Easy, Moderate, Hard) and instantly generate a secure password.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;