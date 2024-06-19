<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          S.Ibnu Romadhon
        </q-toolbar-title>
        <div class="q-pa-md">
          <q-btn-dropdown split color="secondary" rounded label="Tugas Ibnu">
            <q-list>
              <q-item clickable v-close-popup @click="navigateTo('https://ibnu-projectcv.vercel.app/')">
                <q-item-section>
                  <q-item-label>Tugas 1</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="navigateTo('https://example.com/tugas2')">
                <q-item-section>
                  <q-item-label>Tugas 2</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="navigateTo('https://223510579-ibnu.vercel.app/')">
                <q-item-section>
                  <q-item-label>Tugas 3</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="navigateTo('https://example.com/tugas4')">
                <q-item-section>
                  <q-item-label>Tugas 4</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="navigateTo('https://ibnu-store-gamma.vercel.app/')">
                <q-item-section>
                  <q-item-label>Tugas 5</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="navigateTo('https://ibnu-223510579-pbk6.vercel.app/')">
                <q-item-section>
                  <q-item-label>Tugas 6</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <q-tabs align="left">
          <q-route-tab to="/Weather" label="Weather" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-secondary text-black">
      <q-toolbar>
        <q-toolbar-title>
          <div class="footer">
            Copyright © 2024 S.Ibnu Romadhon. All Rights Reserved.
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
const navigateTo = (url) => {
  window.location.href = url;
};
</script>

<style scoped>
.footer {
  text-align: center;
  font-size: 10px;
}
.q-layout {
  font-family: 'Poppins';
}
</style>
