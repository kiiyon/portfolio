import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="section">
      <h2>お問い合わせフォーム</h2>
      <p>以下の情報を入力してお問い合わせください。</p>
      <form>
        <label>
          名前:
          <input type="text" name="name" />
        </label>
        <label>
          メールアドレス:
          <input type="email" name="email" />
        </label>
        <label>
          メッセージ:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">送信</button>
      </form>
    </section>
  );
}

export default ContactSection;
