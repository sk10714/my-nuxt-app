<template>
  <section id="banner">
    <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/aboutlogo.png" alt="">
    <h1 class="title">網站規劃顧問</h1>
    <p class="en-title">Website Planning</p>
  </section>
  <section id="digital">
    <h2 class="title">網站規劃就像<span class="img-wrap" ref="lottieContainer"></span>蓋房子一般</h2>
    <p class="subtitle">網站規劃顧問有如建築師和室內設計師，<br />減少您犯錯的機率和可能遇到的以下幾個問題：</p>
    <div class="row">
      <div class="card">
        <h3 class="number">01</h3>
        <p>是否有專業知識來進行網站規劃？</p>
        <div class="img-wrap">
          <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/webplanimg1.png" alt="Webplanimg">
          <div class="card-bottom"></div>
        </div>
      </div>
      <div class="card">
        <h3 class="number">02</h3>
        <p>想做的功能不知道怎麼形容，網站設計公司做出來是我要的嗎？</p>
        <div class="img-wrap">
          <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/webplanimg2_1.png" alt="Webplanimg">
          <div class="card-bottom"></div>
        </div>
      </div>
      <div class="card">
        <h3 class="number">03</h3>
        <p>要重新改版網站，原本的問題在哪，又要如何避免重複發生？</p>
        <div class="img-wrap">
          <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/webplanimg3.png" alt="Webplanimg">
          <div class="card-bottom"></div>
        </div>
      </div>
      <div class="card">
        <h3 class="number">04</h3>
        <p>原本的網站沒效果，改版後就會比較好嗎?</p>
        <div class="img-wrap">
          <img style="max-width: 247px; margin-bottom: 40px;" src="https://wcmep.com.tw/wp-content/uploads/2023/07/webplanimg4-300x149.png" alt="Webplanimg">
          <div class="card-bottom"></div>
        </div>
      </div>
      <div class="card">
        <h3 class="number">05</h3>
        <p>你會用工具把網站拼湊起來，但網站要怎麼 讓客戶有正確的認識？</p>
        <div class="img-wrap">
          <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/webplanimg5.png" alt="Webplanimg">
          <div class="card-bottom"></div>
        </div>
      </div>
      <div class="card">
        <h3 class="number">06</h3>
        <p>網站能帶來投資回報率嗎？</p>
        <div class="img-wrap">
          <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/webplanimg6.png" alt="Webplanimg">
          <div class="card-bottom"></div>
        </div>
      </div>
    </div>
  </section>
  <section id="service">
    <h2 class="title">不論您的網站身處於什麼樣的情境<br />我們透過知識傳遞和顧問諮詢解決您的問題</h2>
    <p class="subtitle">我們可以成為您團隊的延伸，協助補充專業知識和諮詢，也可以從無到有協助您的網站建置加速進行，協助設計、開發和後續行銷，幫助搜尋引擎更快找到您</p>
    <h3 class="service-title">網站規劃服務項目</h3>
    <p class="text">我們提供3種的方式參與您的網站規劃</p>
    <div class="row">
      <p class="number">01</p>
      <div class="img-wrap">
        <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/serviceitem1.png" alt="Serviceitem">
      </div>
      <div class="content">
        <h4 class="title">按時間計費</h4>
        <p>可以先透過短時間的洽談和諮詢，NT$2,000起（1小時），透過有效的對話，給予您方向</p>
      </div>
    </div>
    <div class="row">
      <p class="number">02</p>
      <div class="img-wrap">
        <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/serviceitem2.png" alt="Serviceitem">
      </div>
      <div class="content">
        <h4 class="title">完整性的網站需求規劃</h4>
        <p>可以先透過短時間的洽談和諮詢，NT$2,000起（1小時），透過有效的對話，給予您方向</p>
        <ol>
          <li>網站策略諮詢</li>
          <li>協助與設計公司和系統開發商對接</li>
          <li>繪製網站Wireframe & Flow Chat</li>
          <li>網站競業分析與研究</li>
          <li>網站SEO佈局建議</li>
        </ol>
      </div>
    </div>
    <div class="row">
      <p class="number">03</p>
      <div class="img-wrap">
        <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/serviceitem3.png" alt="Serviceitem">
      </div>
      <div class="content">
        <h4 class="title">協助您從無到有建立有效的對外門面</h4>
        <p>從資料搜集的協助、網站整體規劃、網站製作到後續行銷，透過一條龍的服務協助您在網路上取得成功</p>
        
      </div>
    </div>
  </section>
</template>

<script setup>
const lottieContainer = ref(null)

onMounted(async () => {
  const lottie = await import('lottie-web')

  lottie.default.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/animations/house.json'
  })
})
</script>

<style scoped>
#banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 120px;
  padding-bottom: 70px;
  background-color: #F5F1E7;
  background-image: url(https://wcmep.com.tw/wp-content/uploads/2023/07/sky-2.png);
  background-size: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#banner .title {
  font-size: 45px;
  font-weight: 700;
  line-height: 1em;
  color: #B28E62;
}
#banner .en-title {
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 2em;
  color: #C6A96C;
}
#digital {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
#digital .title {
  font-family: "Noto Sans TC", Sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 1px;
  color: #A57A44;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
}
#digital .title .img-wrap {
  width: 180px;
}
#digital .en-title {
  font-family: "Poppins", Sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #A57A44BF;
  margin-bottom: 20px;
}
#digital .subtitle {
  width: 100%;
  max-width: 548px;
  text-align: center;
  font-family: "Noto Sans TC", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 1px;
  color: #423C45;
  margin-bottom: 16px;
}
#digital .row {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
#digital .row .card {
  width: calc((100% - 40px) / 3);
  background: #F4F4F4;
  padding-top: 30px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* gap: 20px; */
  overflow: hidden;
  text-align: center;
}
.card .number {
  width: 80px;
  height: 78px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #F2B351;
  border-radius: 100%;
  font-size: 26px;
  font-weight: 700;
  line-height: 1em;
  color: #F2B351;
  margin-bottom: 20px;
}
.card p {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.625em;
  letter-spacing: 1px;
  color: #423C45;
  margin-bottom: 16px;
  width: 90%;
}
.card .img-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card .img-wrap img {
  width: auto;
  height: auto;
}
.card-bottom {
  background: #F2B351;
  width: 100%;
  height: 20px;
}

#service {
  width: 100%;
  text-align: center;
}
#service .title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3em;
  color: #A57A44;
  margin-bottom: 28px;
}
#service .subtitle {
  width: 100%;
  max-width: 625px;
  margin: 0 auto 66px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.625em;
  letter-spacing: 1px;
  color: #423C45;
}
#service .service-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 1px;
  color: #423C45;
  margin: 0 0 20px;
}
#service .text {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.625em;
  letter-spacing: 1px;
  color: #423C45;
  margin-bottom: 36px;
}
#service .row {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 30px 0px;
  background-color: #F4F4F4;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
#service .row .number {
  font-family: "Inter", Sans-serif;
  font-size: 68px;
  font-weight: 700;
  color: #A7A7A7;
  width: 14%;
  text-align: end;
}
#service .row .img-wrap {
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#service .row img {
  width: auto;
  height: auto;
  display: block;
}
#service .row .content {
  text-align: start;
}
#service .row .content .title {
  font-size: 24px;
  font-weight: 700;
  color: #F4B545;
  margin: 0 0 8px;
}
#service .row .content p {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.8em;
  letter-spacing: 1px;
  color: #5E5E5E;
}
#service .row .content ol {
  padding-left: 18px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.8em;
  letter-spacing: 1px;
  color: #5E5E5E;
}
</style>
