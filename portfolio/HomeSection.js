import React from "react";

function HomeSection() {
  return (
    <section id="home" className="section">
      <h1>渡邊清大</h1>
      <p>職業: ITフリーランス & 日本語講師</p>
      <p>
        ITフリーランスとして活動しながら、日本語講師としても活躍しています。
        海外での仕事経験が豊富で、特にAI技術を活用したプロジェクトに注力しています。
        現在、海外で働くか国内で働くかを検討中で、様々な方とお話しすることを楽しみにしています。
      </p>
      <h2>最近の取り組み</h2>
      <ul>
        <li>AIを活用したYouTube作成とマーケティングの自動化を試行中。</li>
        <li>Notionページに一部事例を公開中: <a href="#">こちら</a></li>
      </ul>
    </section>
  );
}

export default HomeSection;
