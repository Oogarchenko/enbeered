<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid d-flex">
            <a class="navbar-brand" href="#">
                <img src="@/assets/images/moes-logo.webp" alt="" width="60" height="60" class="d-inline-block align-text-middle logo">
                Enbeered!
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navigation navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Bar(store)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/composition">Bar(composition-api)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

</script>

<style scoped>
    .navbar {
        padding: 10px 30px;
        font-weight: bold;
    }
    .navbar-brand {
        align-self: center;
    }
    .logo {
        margin-right: 1.5rem;
    }
    .navbar-nav {
        margin-left: auto;
    }
</style>