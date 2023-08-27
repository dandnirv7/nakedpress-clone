<script>
import Whatsapp from "../components/Whatsapp.vue";
import Accordion from "../components/Accordion.vue";
import Download from "../components/Download.vue";
export default {
  components: {
    Whatsapp,
    Accordion,
    Download,
  },
};
</script>

<template>
  <div>
    <Whatsapp />
    <Accordion
      :storeType="'faq'"
      :title="'FAQ'"
      :description="'Pertanyaan umum seputar nakedpress, detox, dan cold pressed juice'"
      class="mt-10"
    />
    <Download />
  </div>
</template>
