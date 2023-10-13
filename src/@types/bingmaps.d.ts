// This is a simplified declaration file for the Microsoft Maps API
// For a more complete version, install @types/bingmaps package

declare namespace Microsoft {
  namespace Maps {
    class Map {
      constructor(element: string | HTMLElement, options?: IMapOptions);
      entities: EntityCollection;
    }

    class Location {
      constructor(latitude: number, longitude: number);
    }

    class Pushpin {
      constructor(location: Location, options?: IPushpinOptions);
    }

    interface IMapOptions {
      animate?: boolean;
      credentials: string;
      enableClickableLogo?: boolean;
      enableSearchLogo?: boolean;
      showDashboard?: boolean;
      useInertia?: boolean;
      zoom?: number;
    }

    interface IPushpinOptions {
      title?: string;
      text?: string;
    }

    class EntityCollection {
      push(entity: Pushpin): void;
    }
  }
}
