import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Tatata',
          description: 'Mon bébé',
          imageUrl: 'https://stickerdeco.fr/wp-content/uploads/2020/01/Sticker-Love-Coeur-01.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Niamey'
        },
        {
          id:2,
          title: 'Mamito',
          description: 'Mommy',
          imageUrl: 'https://stickerdeco.fr/wp-content/uploads/2020/01/Sticker-Love-Coeur-01.jpg',
          createdDate: new Date(),
          snaps: 266
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}