

<script setup lang="ts">

import { Typography } from '@/shared/ui/Typography'
import IconTg from '@/shared/ui/icons/IconTg.vue'
import { ButtonGo } from '@/shared/ui/Button/ButtonGo'
import { SocialLink } from '@/shared/ui/SocialLink'

const SOCIALS = [
  {
    name: 'Facebook',
    link: '#'
  },
  {
    name: 'Instagram',
    link: '#'
  },
  {
    name: 'Telegram',
    link: '#'
  },
  {
    name: 'Behance',
    link: '#'
  },
  {
    name: 'Linkedn',
    link: '#'
  },
  {
    name: 'Privacy Policy',
    link: '#'
  },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <Typography size="sm" tag-name="p">
        Is there a project?
      </Typography>

      <div class="footer__wrapper">
        <div class="footer__left">
          <Typography size="xl" tag-name="p" class="footer__title">
            <span>Let’s work </span>
          </Typography>
          <Typography size="xl" tag-name="p" class="footer__title">
            <span>to</span>g<span>ether</span>
          </Typography>
        </div>
        <div class="footer__right">
          <div class="footer__text">
            <Typography size="sm" tag-name="p" class="mb-12">
              For all questions
            </Typography>
            <Typography size="sm" tag-name="p" class="mb-4">
              +7 (920) 278—00—68
            </Typography>
            <Typography size="sm" tag-name="p" >
              qtim@agency.com
            </Typography>
          </div>
          <div class="footer__text">
            <Typography size="sm" tag-name="p" class="mb-12">
              Office in Russia
            </Typography>
            <Typography size="sm" tag-name="p" class="mb-8">
              139 Ruben Station Lake Drew, NM 52678
            </Typography>
            <IconTg />
          </div>
          <div class="footer__text">
            <Typography size="sm" tag-name="p" class="mb-12">
              Office in Dubai
            </Typography>
            <Typography size="sm" tag-name="p" class="mb-8">
              139 Ruben Station Lake Drew, NM 52678
            </Typography>
            <IconTg />
          </div>
        </div>
      </div>

      <div class="footer__social">
        <SocialLink
          v-for="social in SOCIALS.slice(0, 3)"
          :key="social.name"
          :link="social.link"
          class="mb-28"
        >
          {{ social.name }}
        </SocialLink>
        <ButtonGo class="footer__button">GO</ButtonGo>
        <SocialLink
          v-for="(social, i) in SOCIALS.slice(3)"
          :key="social.name + i"
          :link="social.link"
          class="mb-28"
        >
          {{ social.name }}
        </SocialLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import "styles.scss";
</style>