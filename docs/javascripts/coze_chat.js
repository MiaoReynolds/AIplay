<script src="https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/oversea/index.js"></script>
<script>
  new CozeWebSDK.WebChatClient({
    config: {
      bot_id: '7623202228375437365',
    },
    componentProps: {
      title: 'Coze',
    },
    auth: {
      type: 'token',
      token: 'pat_*******',
      onRefreshToken: function () {
        return 'pat_*******'
      }
    }
  });
</script>