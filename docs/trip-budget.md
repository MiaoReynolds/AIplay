---
hide:
  - navigation
  - toc
---

<style>
/* Hide MkDocs auto h1 */
.md-typeset > h1:first-child { display: none; }
/* Remove MkDocs content padding to maximize iframe space */
.md-content__inner { padding: 0 !important; margin: 0 !important; max-width: none !important; }
.md-main__inner { margin: 0; max-width: none; }
</style>

<iframe src="../TripBudget.html" style="width: 100%; height: calc(100vh - 60px); border: none; display: block;" allowfullscreen></iframe>

<script src="https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/oversea/index.js"></script>
<script>
  new CozeWebSDK.WebChatClient({
    config: {
      bot_id: '7623313896224751669',
    },
    componentProps: {
      title: 'Coze',
    },
    auth: {
      type: 'token',
      token: 'pat_********',
      onRefreshToken: function () {
        return 'pat_********'
      }
    }
  });
</script>