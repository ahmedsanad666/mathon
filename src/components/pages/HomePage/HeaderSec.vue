<template>
  <section>
    <header
      class="headerSec d-flex py-4 justify-content-center align-items-center px-4"
    >
      <div class="row w-100 h-100">
        <div class="col-12 col-md-6 text-center text-md-end">
          <div class="headerContent">
            <h1>ماذون عقود انكحة</h1>
            <h4>محمدعواد نعتق</h4>
            <div class="w-75 py-4 paragraph">
              <p>
                مأذون شرعي مملك شرعي مملك زواج عاقد شرعي مرخّص في إجراء عقود
                الأنكحة للسعوديين والمقيمن ومايتبع ذلك من إجراءات حكومة لدى
                وزارة العدل
              </p>
              <h5 class="fw-bold">رقم الترخيص : 8665</h5>
            </div>

            <button class="py-2 px-8">تواصل معنا</button>
          </div>
        </div>
        <div
          class="col-12 col-md-6 d-flex justify-content-end align-items-center"
        >
          <div
            class="d-flex flex-column headerContacts h-75 justify-content-between"
          >
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
            <a
              class="wtsicon"
              target="_blank"
              href="https://wa.me/+200123456789"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!-- Font Awesome Pro 6.0.0-alpha2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.headerSec {
  // border-bottom: 1px #ccc solid;
  box-shadow: 0px 0px 4px 4px rgba($color: #645526, $alpha: 0.5);
  height: 70vh;
  background-color: var(--main-bg-color);

  @media only screen and (max-width: 768px) {
    /*Tablets [601px -> 1200px]*/
    height: 85vh;
  }
  .headerContent {
    h1 {
      font-family: "Reem Kufi", sans-serif;
    }
    p {
      color: var(--primary-dark);
      font-size: 1.5rem;
    }

    button {
      background: var(--primary-color);
      color: white;
      font-weight: bold;
      outline: none;
      border: none;
      transition: all 0.2s ease-in-out;
      width: 30%;
      border-radius: 7px;
      &:hover {
        background: #f39c12;
        color: #2c3e50;
      }
    }
  }

  .headerContacts {
    margin-top: 2rem !important;
    width: 80px;
    @media only screen and (max-width: 768px) {
      flex-direction: row !important;
      width: 70%;
      margin: auto;
    }
  }
}

svg {
  cursor: pointer;
}

.svg-inline--fa:hover {
  color: var(--primary-color) !important; /* Change color on hover */
}
.wtsicon {
  svg {
    width: 30px;
  }
}
.wtsicon:hover {
  fill: var(--primary-color) !important; /* Change color on hover */
}

@media only screen and (max-width: 768px) {
  .paragraph {
    width: 100% !important;
  }
}
</style>
