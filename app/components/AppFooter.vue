<template>
  <footer>
    <div class="container">
      <img class="logo" src="https://wcmep.com.tw/wp-content/uploads/2023/06/logof.svg" alt="奇策整合行銷">
      <div class="company-info">
        <div class="sns-wrap">
          <a class="link-wrap" href="">
            <img src="https://wcmep.com.tw/wp-content/uploads/2023/06/footer_ig.svg" alt="IG">
          </a>
          <a href="" class="link-wrap">
            <img src="https://wcmep.com.tw/wp-content/uploads/2023/06/footer_yt.svg" alt="Youtube">
          </a>
          <a class="link-wrap" href="">
            <img src="https://wcmep.com.tw/wp-content/uploads/2023/06/footer_fb.svg" alt="Facebook">
          </a>
          <p>© WCMEP MARKETING 2026 All rights</p>
        </div>
        <p class="info">Tel. <a href="tel:04-23111717" target="_blank">04-23111717</a>｜Email. <a href="mailto:morning@wcmep.com.tw" target="_blank">morning@wcmep.com.tw</a>｜<br />ADD. 台中市西屯區長安路一段228號2F</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  background-color: #4B4B4B;
  color: white;
}
footer .container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
footer .logo {
  width: 100%;
  max-width: 250px;
  height: auto;
  display: block;
}
.company-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.sns-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.sns-wrap .link-wrap {
  opacity: 0.4;
}
.sns-wrap p {
  font-size: 14px;  
  font-weight: 400;
}
.info {
  font-size: 14px;
  font-weight: 400;
  line-height: 2em;
}
.info a {
  color: #fff;
  text-decoration: none;
}
</style>