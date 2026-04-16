---
layout: page
title: Developer Notes
permalink: /notes/
---

# Developer Notes

Quick reference guides and cheat sheets for developers.

<ul class="page-list">
{% for item in site.notes %}
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

{% if site.notes.size == 0 %}
<p>Notes coming soon!</p>
{% endif %}
