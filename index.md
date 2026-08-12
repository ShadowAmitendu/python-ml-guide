---
layout: default
title: Home
---

## Welcome to Python ML Guide

A **beginner-friendly, step-by-step** guide to Machine Learning with Python.

Whether you're a student, a developer switching to ML, or just curious — this blog will walk you through everything from **setting up your environment** to **building real ML models**.

---

### Latest Posts

<div class="posts-list" style="margin-top: 1.5em;">
  {% for post in site.posts %}
    <div class="post-preview" style="margin-bottom: 2em; padding-bottom: 1.5em; border-bottom: 1px solid #30363d;">
      <span class="post-meta" style="color: #8b949e; font-size: 0.85em;">{{ post.date | date: "%B %-d, %Y" }}</span>
      <h3 style="margin: 0.3em 0 0.5em 0;">
        <a href="{{ post.url | relative_url }}" style="color: #58a6ff; text-decoration: none;">{{ post.title | escape }}</a>
      </h3>
      {% if post.description %}
        <p style="color: #c9d1d9; font-size: 0.95em; margin: 0;">{{ post.description }}</p>
      {% endif %}
    </div>
  {% endfor %}
</div>
