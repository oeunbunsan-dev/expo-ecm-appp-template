class AssetManager {
      public readonly images = {
            image1: require("@/assets/images/image-1.jpg"),
            image2: require("@/assets/images/image-2.jpg"),
            noInternetConnection : require("@/assets/images/No connection-bro.png"),
            error404: require("@/assets/images/404 error lost in space-bro.png"),
      } as const;

      //   public readonly videos = {
      //     heroVideo: require("@/assets/videos/hero-video.mp4"),
      //     introVideo: require("@/assets/videos/intro.mp4"),
      //   } as const;
}

export const assetManager = new AssetManager();
