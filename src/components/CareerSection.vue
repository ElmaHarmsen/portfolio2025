<script setup></script>

<template>
  <section class="section-wide">
    <div class="container">
      <div class="inside-container">
        <!-- <div class="blobs">
          <img src="../assets/blob-blue.svg" class="blobs__blue" alt="Blob" />
          <img src="../assets/blob-yellow.svg" class="blobs__yellow" alt="Blob" />
        </div> -->
        <h3 class="text-container">
          Starting from September this year, I will be taking a full-time language course in
          Swedish. I believe that speaking the local language where you live and work will benefit
          not only the social aspect of life, but also strengthens my position as an internaltional
          professional in the job market. Meanwhile I am still actively looking and applying for a
          position as interaction designer or frontend developer within the Swedish creative and IT
          sector, and I will be full-time available from January next year. I am truly excited to
          continue my work within design and development here in Sweden, and I look forward to
          further expand my knowledge and skillset in my next position. <br />
          <br />
          If you are interested to hear more or have something to share, please reach out either
          through LinkedIn or via my email.
        </h3>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-wide {
  grid-column-start: 1;
  grid-column-end: 17;
  background-color: var(--clr-white);
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;

    .inside-container {
      grid-column-start: 4;
      grid-column-end: 14;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      padding: 10rem 0;
      margin: 0 -1rem;

      .text-container {
        grid-column-start: 2;
        grid-column-end: 3;
      }
    }
  }
}
</style>
