<template>
  <div class="blog-page">
    <h1>文章列表</h1>

    <!-- 搜尋 -->
    <div class="search">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜尋文章..."
      />
    </div>

    <!-- 分類標籤 -->
    <div class="categories">
      <button
        :class="['tag', { active: selectedCategory === '' }]"
        @click="selectedCategory = ''"
      >
        全部 
      </button>
      <button
        v-for="category in categories"
        :key="category.id"
        :class="['tag', { active: selectedCategory === category.id }]"
        @click="selectedCategory = category.id"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- 文章卡片列表 -->
    <div class="post-list">
      <NuxtLink
        v-for="post in paginatedPosts"
        :key="post.id"
        :to="`/blog/${post.slug}`"
        class="post-card"
      >
        <div class="post-meta">
          <span class="category-badge">
            {{ getCategoryName(post.categories[0]) }}
          </span>
          <span class="date">{{ formatDate(post.date) }}</span>
        </div>
        <h2>{{ post.title.rendered }}</h2>
        <div class="excerpt" v-html="post.excerpt.rendered" />
      </NuxtLink>
    </div>

    <!-- 沒有文章時 -->
    <div v-if="paginatedPosts.length === 0" class="empty">
      找不到相關文章 😢
    </div>

    <!-- 分頁 -->
    <div class="pagination" v-if="totalPages > 1">
      <button :disabled="currentPage === 1" @click="currentPage--">
        上一頁
      </button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" @click="currentPage++">
        下一頁
      </button>
    </div>

  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const wpUrl = config.public.wordpressUrl

// 第一步：先取得子分類 ID
const childCategories = await $fetch(
  `${wpUrl}/wp-json/wp/v2/categories?parent=58&per_page=100`
)

// 第二步：組合子分類 ID → "55,56,57"
const categoryIds = childCategories.map(c => c.id).join(',')
console.log('子分類 IDs：', categoryIds)

// 第三步：用子分類 ID 抓文章和分類
const [{ data: allPosts }, { data: allCategories }] = await Promise.all([
  useAsyncData('wp-posts', () =>
    $fetch(`${wpUrl}/wp-json/wp/v2/posts?per_page=100&_embed&categories=${categoryIds}`)
  ),
  useAsyncData('wp-categories', () =>
    $fetch(`${wpUrl}/wp-json/wp/v2/categories?parent=58&per_page=100`)
  )
])

const searchQuery = ref('')
const selectedCategory = ref('')
const currentPage = ref(1)
const postsPerPage = 5

// 分類列表（只顯示子分類）
const categories = computed(() =>
  (allCategories.value ?? []).filter(c => c.count > 0)
)

// 根據分類 id 取得分類名稱
const getCategoryName = (categoryId) => {
  const cat = (allCategories.value ?? []).find(c => c.id === categoryId)
  return cat?.name ?? ''
}

// 過濾文章
const filteredPosts = computed(() => {
  currentPage.value = 1
  return (allPosts.value ?? []).filter(post => {
    const matchSearch =
      post.title.rendered.includes(searchQuery.value) ||
      post.excerpt.rendered.includes(searchQuery.value)
    const matchCategory =
      selectedCategory.value === '' ||
      post.categories.includes(Number(selectedCategory.value))
    return matchSearch && matchCategory
  })
})

// 分頁
const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredPosts.value.length / postsPerPage))
)

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return filteredPosts.value.slice(start, start + postsPerPage)
})

// 日期格式化
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px;
}

h1 {
  font-size: 32px;
  color: #b5541a;
  margin-bottom: 24px;
}

.search input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #f0d5b8;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  background-color: #fff8f0;
  color: #7a5c44;
  box-sizing: border-box;
  margin-bottom: 24px;
}

.search input:focus {
  border-color: #e8763a;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.tag {
  background-color: #fff8f0;
  border: 1px solid #f0d5b8;
  color: #b5541a;
  padding: 6px 16px;
  border-radius: 99px;
  cursor: pointer;
  font-size: 14px;
}

.tag.active {
  background-color: #e8763a;
  border-color: #e8763a;
  color: white;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.post-card {
  background-color: #fff8f0;
  border: 1px solid #f0d5b8;
  border-radius: 12px;
  padding: 24px;
  text-decoration: none;
  transition: box-shadow 0.2s;
}

.post-card:hover {
  box-shadow: 0 4px 12px rgba(181, 84, 26, 0.15);
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.category-badge {
  background-color: #e8763a;
  color: white;
  padding: 2px 10px;
  border-radius: 99px;
  font-size: 12px;
}

.date {
  font-size: 12px;
  color: #aaa;
}

.post-card h2 {
  font-size: 18px;
  color: #b5541a;
  margin-bottom: 8px;
}

.excerpt {
  color: #7a5c44;
  font-size: 14px;
}

.empty {
  text-align: center;
  color: #aaa;
  padding: 48px 0;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.pagination button {
  background-color: #e8763a;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.pagination button:disabled {
  background-color: #f0d5b8;
  cursor: not-allowed;
}

.pagination span {
  color: #7a5c44;
  font-size: 14px;
}
</style>