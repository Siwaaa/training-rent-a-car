<template>
  <div class="flex justify-between items-center h-24 mb-2">
    <router-link to="/"
      ><img class="object-contain h-12" src="@/assets/img/logo.png"
    /></router-link>
    <span class="text-gray-400 font-light"
      >World's first affordable airsharing</span
    >
    <div class="flex justify-between items-center w-60">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8.99401C1.99947 8.20621 2.15435 7.42605 2.45577 6.69819C2.75718 5.97034 3.19921 5.30909 3.75655 4.75231C4.31388 4.19553 4.97558 3.75416 5.70373 3.45348C6.43189 3.15279 7.21221 2.99869 8 3.00001H16C19.313 3.00001 22 5.69501 22 8.99401V21H8C4.687 21 2 18.305 2 15.006V8.99401ZM20 19V8.99401C19.9974 7.93451 19.5749 6.91925 18.8251 6.17063C18.0754 5.42201 17.0595 5.00106 16 5.00001H8C7.47485 4.99869 6.9546 5.10106 6.4691 5.30123C5.98359 5.50141 5.54238 5.79546 5.17076 6.16652C4.79914 6.53758 4.50443 6.97835 4.30353 7.46356C4.10262 7.94876 3.99947 8.46886 4 8.99401V15.006C4.00265 16.0655 4.42511 17.0808 5.17486 17.8294C5.9246 18.578 6.9405 18.999 8 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"
          fill="#99A7B5"
        />
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="4" r="3" fill="#F84AB3" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.9994 10.9292C20.9998 10.9631 21 10.997 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2C12.4291 2 12.8511 2.03013 13.2642 2.08841C13.0921 2.69603 13 3.33726 13 4C13 4.02378 13.0001 4.04753 13.0004 4.07126C12.6736 4.0243 12.3396 4 12 4C8.134 4 5 7.148 5 11.031V18H19V11.031C19 10.9969 18.9998 10.9629 18.9993 10.929C19.3261 10.9758 19.6602 11 20 11C20.3393 11 20.673 10.9759 20.9994 10.9292ZM13.7678 22.7678C14.2366 22.2989 14.5 21.663 14.5 21H9.5C9.5 21.663 9.76339 22.2989 10.2322 22.7678C10.7011 23.2366 11.337 23.5 12 23.5C12.663 23.5 13.2989 23.2366 13.7678 22.7678Z"
          fill="#99A7B5"
        />
      </svg>
      <div class="flex justify-between items-center cursor-pointer">
        <span class="text-blue-900 mr-2">Andrei Sivcov</span>
        <img
          class="object-contain h-12"
          src="@/assets/img/ava.png"
          alt="avatar"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>