---
layout: page
title: Knowledge Base
permalink: /kb/
---

# Knowledge Base

Find answers to common questions and solutions to common problems.

<ul class="page-list">
{% for item in site.kb %}
  <li>
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    {% if item.category %}
    <p class="category">Category: {{ item.category }}</p>
    {% endif %}
    {% if item.excerpt %}
    <p>{{ item.excerpt | strip_html | truncatewords: 30 }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>

{% if site.kb.size == 0 %}
<p>Knowledge base articles coming soon!</p>
{% endif %}
