<template>
  <footer class="footer-custom">
    <div class="font-medium">Designed and Developed by Wang</div>
    <div class="font-medium">Copyright &copy; 2023</div>
    <div class="flex gap-4">
      <Button
        text
        rounded
        icon="pi pi-github"
        class="button-icon-only-dark-custom"
      />
      <Button
        text
        rounded
        icon="pi pi-twitter"
        class="button-icon-only-dark-custom"
      />
      <Button
        text
        rounded
        icon="pi pi-linkedin"
        class="button-icon-only-dark-custom"
      />
      <Button
        text
        rounded
        icon="pi pi-instagram"
        class="button-icon-only-dark-custom"
      />
    </div>
  </footer>
</template>

<style scoped>
.footer-custom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #0a0416;
  color: white;
}
</style>
