// src/types/three-extensions.d.ts

declare module "three/examples/jsm/controls/OrbitControls" {
  import {
    Camera,
    EventDispatcher,
    MOUSE,
    Vector3
  } from "three";

  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);

    object: Camera;
    domElement: HTMLElement | Document;

    enabled: boolean;
    target: Vector3;

    enableZoom: boolean;
    zoomSpeed: number;

    enableRotate: boolean;
    rotateSpeed: number;

    enablePan: boolean;
    panSpeed: number;

    enableDamping: boolean;
    dampingFactor: number;

    update(): void;
    dispose(): void;

    keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };
    mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
  }
}
