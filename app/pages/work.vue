<template>
    <section id="banner">
        <img src="https://wcmep.com.tw/wp-content/uploads/2023/07/aboutlogo.png" alt="">
        <h1 class="title">案例分享</h1>
        <p class="en-title">work</p>
    </section>
    <section id="digital">
        <h2 class="title">縱效資源整合，解決數位痛點</h2>
        <p class="subtitle">品牌發想到視覺設計，開啟數位行銷邁向品牌獲利</p>
    </section>
</template>

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
}
#digital .title {
  font-family: "Noto Sans TC", Sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 1px;
  color: #A57A44;
  margin: 0 0 20px;
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
</style>
