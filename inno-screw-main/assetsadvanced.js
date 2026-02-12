// ========================================
// ADVANCED FEATURES FOR INNO-SCREW
// ========================================

(function() {
  'use strict';

  // ========================================
  // SEARCH FUNCTIONALITY
  // ========================================
  
  const SearchModule = {
    init: function() {
      this.searchToggle = document.getElementById('searchToggle');
      this.searchOverlay = document.getElementById('searchOverlay');
      this.searchClose = document.getElementById('searchClose');
      this.searchInput = document.getElementById('searchInput');
      this.searchResults = document.getElementById('searchResults');
      
      if (this.searchToggle) {
        this.bindEvents();
        this.loadSearchIndex();
      }
    },
    
    bindEvents: function() {
      this.searchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.openSearch();
      });
      
      this.searchClose.addEventListener('click', () => {
        this.closeSearch();
      });
      
      this.searchOverlay.addEventListener('click', (e) => {
        if (e.target === this.searchOverlay) {
          this.closeSearch();
        }
      });
      
      this.searchInput.addEventListener('input', (e) => {
        this.performSearch(e.target.value);
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeSearch();
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          this.openSearch();
        }
      });
    },
    
    openSearch: function() {
      this.searchOverlay.classList.add('active');
      this.searchInput.focus();
    },
    
    closeSearch: function() {
      this.searchOverlay.classList.remove('active');
      this.searchInput.value = '';
      this.searchResults.innerHTML = '';
    },
    
    loadSearchIndex: function() {
      // Load search index from JSON file
      fetch('/search-index.json')
        .then(response => response.json())
        .then(data => {
          this.searchIndex = data;
        })
        .catch(error => console.error('Error loading search index:', error));
    },
    
    performSearch: function(query) {
      if (!query || query.length < 2) {
        this.searchResults.innerHTML = '';
        return;
      }
      
      const results = this.searchIndex.filter(item => {
        return item.title.toLowerCase().includes(query.toLowerCase()) ||
               item.content.toLowerCase().includes(query.toLowerCase());
      }).slice(0, 10);
      
      this.displayResults(results, query);
    },
    
    displayResults: function(results, query) {
      if (results.length === 0) {
        this.searchResults.innerHTML = '<div class="p-4 text-center">No results found</div>';
        return;
      }
      
      const html = results.map(result => `
        <div class="search-result-item" onclick="window.location.href='${result.url}'">
          <h5>${this.highlightQuery(result.title, query)}</h5>
          <p class="text-muted">${this.highlightQuery(result.excerpt, query)}</p>
          <small class="text-primary">${result.type}</small>
        </div>
      `).join('');
      
      this.searchResults.innerHTML = html;
    },
    
    highlightQuery: function(text, query) {
      const regex = new RegExp(`(${query})`, 'gi');
      return text.replace(regex, '<mark>$1</mark>');
    }
  };

  // ========================================
  // THEME TOGGLE (DARK/LIGHT MODE)
  // ========================================
  
  const ThemeModule = {
    init: function() {
      this.themeToggle = document.getElementById('themeToggle');
      this.themeIcon = document.getElementById('themeIcon');
      this.currentTheme = localStorage.getItem('theme') || 'light';
      
      this.setTheme(this.currentTheme);
      
      if (this.themeToggle) {
        this.themeToggle.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleTheme();
        });
      }
    },
    
    setTheme: function(theme) {
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if (this.themeIcon) {
          this.themeIcon.classList.remove('fa-moon');
          this.themeIcon.classList.add('fa-sun');
        }
      } else {
        document.body.classList.remove('dark-mode');
        if (this.themeIcon) {
          this.themeIcon.classList.remove('fa-sun');
          this.themeIcon.classList.add('fa-moon');
        }
      }
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);
    },
    
    toggleTheme: function() {
      const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
    }
  };

  // ========================================
  // PUBLICATIONS FILTER & SEARCH
  // ========================================
  
  const PublicationsModule = {
    init: function() {
      this.publicationsGrid = document.getElementById('publicationsGrid');
      if (!this.publicationsGrid) return;
      
      this.publications = Array.from(document.querySelectorAll('.publication-card'));
      this.filterButtons = document.querySelectorAll('.filter-btn');
      this.searchInput = document.getElementById('pubSearch');
      this.yearFilter = document.getElementById('yearFilter');
      this.sortFilter = document.getElementById('sortFilter');
      this.resultCount = document.getElementById('resultCount');
      
      this.bindEvents();
      this.updateCount();
    },
    
    bindEvents: function() {
      this.filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.handleFilterClick(e.target);
        });
      });
      
      if (this.searchInput) {
        this.searchInput.addEventListener('input', (e) => {
          this.filterPublications();
        });
      }
      
      if (this.yearFilter) {
        this.yearFilter.addEventListener('change', () => {
          this.filterPublications();
        });
      }
      
      if (this.sortFilter) {
        this.sortFilter.addEventListener('change', () => {
          this.sortPublications();
        });
      }
    },
    
    handleFilterClick: function(button) {
      this.filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      this.filterPublications();primary">
                  <i class="fas fa-brain"></i> Deep Learning
                </span>
                <span class="badge badge-info">
                  <i class="fas fa-chart-line"></i> Real-time
                </span>
              </div>
              <a href="/demos/anomaly-detection" class="btn btn-primary btn-block mt-3">
                <i class="fas fa-play"></i> Try Demo
              </a>
            </div>
          </div>
        </div>

        <!-- Demo Card 2 -->
        <div class="col-lg-6 mb-4">
          <div class="demo-card">
            <div class="demo-thumbnail">
              <img src="/img/demos/visualization.jpg" alt="Data Visualization">
              <div class="demo-badge">
                <i class="fas fa-chart-bar"></i> Visualization
              </div>
            </div>
            <div class="demo-content">
              <h4>Screw Data Visualization</h4>
              <p>Explore our dataset with interactive 3D plots, statistical analysis, and feature distributions.</p>
              <div class="demo-features">
                <span class="badge badge-success">
                  <i class="fas fa-cube"></i> 3D Plots
                </span>
                <span class="badge badge-