<template>
  <header>
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img src="https://wcmep.com.tw/wp-content/uploads/2023/02/logo.png" alt="奇策整合行銷">
        </NuxtLink>
      </div>
      <nav>
        <ul class="menu">
          <li>
            <NuxtLink to="/about" active-class="active">關於奇策</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/planning" active-class="active">網站規劃顧問</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/seo" active-class="active">SEO內容行銷</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/work" active-class="active">案例分享</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" active-class="active">部落格</NuxtLink>
          </li>
        </ul>
      </nav>
      <a href="" class="btn">
          聯絡我們
        </a>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #fbfbfb;
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
header .container {
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo a {
  text-decoration: none;
}
.logo a img {
  width: 100%;
  max-width: 260px;
  height: auto;
  display: block;
}
nav {
  display: flex;
  align-items: center;
}
nav ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  column-gap: 50px;
}
nav .menu a {
  font-family: "Noto Sans TC", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1em;
  color: #1F1F1F;
  text-decoration: none;
  transition: color 0.3s ease;
}
nav .menu a.active {
  color: #D2B475;
}
nav .menu a:hover {
  color: #D2B475;
}
.btn {
  padding: 15px 30px;
  background-color: #D2B475;
  color: #ffffff;
  text-decoration: none;
  border-radius: 100px;
}
</style>