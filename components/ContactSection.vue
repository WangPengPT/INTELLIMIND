<script setup lang="ts">
const t = useContent()
const form = reactive({ name: '', email: '', message: '' })

// No backend yet: hand the message to the visitor's mail client.
const submit = () => {
  const subject = encodeURIComponent(`${t.value.contact.subject} ${form.name}`)
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
  window.location.href = `mailto:hello@intellimind.pt?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact" class="section">
    <div class="wrap grid">
      <div v-reveal class="text">
        <h2 class="h2">{{ t.contact.title }}</h2>
        <p class="lead">{{ t.contact.lead }}</p>
        <a class="mail" href="mailto:hello@intellimind.pt">hello@intellimind.pt</a>
      </div>

      <form v-reveal="150" class="form" @submit.prevent="submit">
        <label>
          <span>{{ t.contact.name }}</span>
          <input v-model="form.name" required autocomplete="name" />
        </label>
        <label>
          <span>{{ t.contact.email }}</span>
          <input v-model="form.email" type="email" required autocomplete="email" />
        </label>
        <label>
          <span>{{ t.contact.message }}</span>
          <textarea v-model="form.message" rows="4" required />
        </label>
        <button class="pill solid" type="submit">{{ t.contact.send }}</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 96px);
  align-items: start;
}
.text {
  display: grid;
  gap: 20px;
  justify-items: start;
}
.mail {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--blue);
  text-underline-offset: 6px;
}
.form {
  display: grid;
  gap: 22px;
  justify-items: start;
}
label {
  display: grid;
  gap: 4px;
  width: 100%;
  font-size: 0.85rem;
  color: var(--muted);
}
input,
textarea {
  font: 400 1.1rem var(--font);
  color: var(--text);
  background: transparent;
  border: 0;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.25);
  padding: 10px 0;
  resize: vertical;
  transition: border-color 0.25s ease;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: var(--blue);
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
