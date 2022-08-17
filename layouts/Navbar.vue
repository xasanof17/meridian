<template>
  <header class="header sticky inset-0">
    <div class="bg-darkGreen py-4 lg:py-5">
      <div class="container">
        <p
          class="font-regular text-sm sm:text-base text-white text-center uppercase max-w-[375px] sm:max-w-full w-full"
        >
          spring seaSon sale | 20% off entire store | Free Premium UK Delivery
        </p>
      </div>
    </div>
    <nav class="nav py-8">
      <div class="container">
        <div class="flex items-center justify-between">
          <ul class="flex items-center">
            <li v-for="(link, i) in leftLinks" :key="i">
              <nuxt-link to="/" class="px-7 text-[#BEBFBE] hover:text-blue">{{
                link.title
              }}</nuxt-link>
            </li>
          </ul>
          <nuxt-link to="/" class="px-5">
            <!-- <nuxt-img src="/static/logo.svg" size="w-[200px]" /> -->
            <nuxt-img src="/static/colored-logo.png" sizes="sm:100vw md:50vw lg:400px" />

          </nuxt-link>
          <ul class="flex items-center">
            <li v-for="(link, i) in rightLinks" :key="i">
              <nuxt-link to="/" class="px-7 text-[#BEBFBE] hover:text-blue">{{
                link.title
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      leftLinks: [
        { title: "Hello", href: "/" },
        { title: "Products", href: "/about" },
        { title: "Showroom", href: "/about" },
        { title: "About Us", href: "/" },
        { title: "Contact", href: "/about" },
      ],
      rightLinks: [
        { title: "Dealer Login", href: "/" },
        { title: "Become A Dealer", href: "/" },
        { title: "Find A Retail ", href: "/" },
        { title: "About Us", href: "/" },
        { title: "Contact", href: "/" },
      ],
    };
  },
};
</script>
<style lang=""></style>
