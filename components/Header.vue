<script setup>

</script>
<template>
    <ul class="flex justify-center gap-12 text-lg text-teal-50 cursor-pointer py-2  ">
        <li><NuxtLink to='/'>Home</NuxtLink></li>
        <li><NuxtLink to='/about'>About</NuxtLink></li>
        <li><NuxtLink to='/contactUs'>Contact us</NuxtLink></li>
        <li>
            <ul class="flex gap-3">
                <li><FontAwesomeIcon icon="fa-brands fa-linkedin" /></li>
                <li><FontAwesomeIcon icon="fa-brands fa-facebook" /></li>
                <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
                <li><FontAwesomeIcon icon="fa-brands fa-twitter" /></li>
             </ul>
        </li>
    </ul>
</template>    