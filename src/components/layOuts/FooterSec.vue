<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-body-tertiary text-muted">
    <!-- Section: Social media -->
    <section class="row ">
      <div class="col-md-6 col-12">
        <div class="me-md-5 text-end textEdit">
          <h4>بخدمتكم في مناسباتكم السعيدة</h4>
        </div>
      </div>
      <div class="col-md-6 col-12 d-flex justify-content-end px-4">
        <div class="footerContacts d-flex justify-content-between w-75 px-4">
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            class="icon alt"
            size="2xl"
          />
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            class="icon alt"
            size="2xl"
          />
          <font-awesome-icon
            :icon="['fab', 'twitter']"
            class="icon alt"
            size="2xl"
          />
          <a href="#" class="wtsicon" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!-- Font Awesome Pro 6.0.0-alpha2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
              <path
                d="M16 256C16 388.549 123.451 496 256 496S496 388.549 496 256S388.549 16 256 16S16 123.451 16 256ZM137.451 303.627L191.695 280.377C198.086 277.611 205.594 279.471 209.938 284.861L231.961 311.768C266.586 294.768 294.734 266.627 311.727 232.018L284.812 209.969C279.437 205.578 277.602 198.141 280.32 191.75L303.586 137.469C306.633 130.516 314.172 126.703 321.516 128.406L371.893 140.031C379.018 141.656 384.002 147.922 384.002 155.25C384.002 281.393 281.383 384.002 155.258 384.002C147.922 384.002 141.654 379.018 140.021 371.893L128.396 321.502C126.709 314.205 130.498 306.627 137.451 303.627Z"
              />
            </svg>
          </a>
          <a class="wtsicon" target="_blank" href="https://wa.me/+200123456789">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!-- Font Awesome Pro 6.0.0-alpha2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
              <path
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              />
            </svg>
          </a>
        </div>
      </div>
      <!-- Left -->

      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2024 Copyright:
      <a class="text-reset fw-bold" href="#">mathon.com</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style lang="scss" scoped>
footer {
  box-shadow: 0px 0px 4px 4px rgba($color: #645526, $alpha: 0.5);

  background: #fffcf2 !important;
}
section{
  padding: 1rem 0;
}
.wtsicon {
  svg {
    width: 30px;
  }
}
.wtsicon:hover {
  fill: var(--primary-color) !important; /* Change color on hover */
}
svg {
  cursor: pointer;
}

.svg-inline--fa:hover {
  color: var(--primary-color) !important; /* Change color on hover */
}

@media only screen and (max-width: 768px) {
  .textEdit {
    text-align: center !important;
  }

  .footerContacts {
    margin: 0 auto;
  }
}
</style>
