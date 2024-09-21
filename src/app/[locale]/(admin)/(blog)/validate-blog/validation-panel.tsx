"use client";

import { useState } from "react";
import { ValidationBlogType } from "./schema";
import { Button } from "@/components/ui/button";

export const ValidationPanel = ({ blogs }: { blogs: ValidationBlogType[] }) => {
    const [currentBlogIndex, setCurrentBlogIndex] = useState(null);

    return (
        <div className="space-y-4">
            <div className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt
                iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu
                augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod
                justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt.
                Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor.
                Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat. Nullam at tristique
                est. Nam sodales arcu lacus, in facilisis purus sodales ut. Nunc id semper erat. In hac habitasse platea dictumst. Cras rutrum odio vitae
                fringilla accumsan. Vivamus vitae placerat justo, ac accumsan mi. Vestibulum at erat et urna convallis laoreet. Cras bibendum vehicula eleifend.
                Nulla euismod augue ut ante vulputate laoreet. Sed ut ex eu ex iaculis tristique nec ullamcorper orci. Donec ac dui tempus, fermentum augue et,
                cursus nisi. Sed sed risus tristique, placerat nibh sed, euismod dui. Integer bibendum quis neque eget sodales. Curabitur rhoncus metus quis
                nulla eleifend, sit amet luctus lorem ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Fusce non semper ipsum, vel feugiat enim. Etiam mollis nulla et nunc eleifend eleifend. Praesent justo odio, rhoncus eget odio finibus, auctor
                euismod lectus. Fusce convallis odio mi, vel varius nisi mollis sit amet. Vivamus gravida mattis nisl et imperdiet. Nullam a ex nisl. Mauris
                lobortis velit urna, et aliquet justo feugiat ut. Aenean non ipsum vel lorem convallis lacinia ut sit amet magna. Pellentesque luctus purus eu
                vulputate hendrerit. Integer dui sapien, venenatis sit amet tincidunt id, euismod mollis arcu. Phasellus eget maximus neque, a auctor neque.
                Maecenas massa massa, facilisis id eros vitae, gravida dignissim justo. Maecenas vel finibus arcu, vitae varius eros. Integer nisl mi, blandit
                ut dapibus vitae, euismod in leo. In ultrices ipsum vel laoreet sollicitudin. Vivamus sed lobortis nisl, nec ultrices dui. Ut ultricies magna in
                nulla tincidunt lacinia. Praesent suscipit purus a cursus pharetra. Curabitur nec tortor tincidunt, imperdiet nulla id, fringilla arcu. Sed non
                fermentum leo. Vivamus mattis nulla ut augue placerat luctus. Donec mollis faucibus libero, at pharetra turpis tristique at. Duis ullamcorper
                sem a nisl placerat, sed pharetra massa posuere. Vivamus euismod egestas convallis. Phasellus rutrum convallis erat a tempus. Vivamus
                pellentesque condimentum nunc sed vestibulum. Nulla justo quam, cursus eu arcu nec, consequat interdum nibh. Mauris ligula eros, rutrum sed
                justo ut, fermentum blandit est. Nunc non purus viverra, tristique lorem eget, viverra tortor. Curabitur quis urna fermentum, pulvinar quam non,
                condimentum orci. Integer et nisl interdum, tristique lacus at, rhoncus velit. Morbi sed est nec libero finibus condimentum. Vestibulum at dolor
                nec augue tempus aliquet vitae malesuada tellus. Sed libero urna, cursus non arcu vestibulum, molestie accumsan arcu. Morbi luctus varius sapien
                a dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi condimentum quam urna, sed vestibulum
                lorem egestas sed. Proin efficitur orci quis orci tempor mollis. Donec sit amet euismod sem. Sed fringilla nulla eget elit lobortis finibus vel
                in ante. Nunc congue, nisi in eleifend luctus, leo ante aliquam ipsum, in gravida urna neque et lorem. Orci varius natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Sed vitae neque ut purus sodales scelerisque in quis est. Cras sodales diam urna, in pharetra
                lacus sodales et. Morbi eu dui mattis, elementum mauris accumsan, imperdiet metus. Morbi ac leo purus. Nulla quis malesuada nibh. Etiam non
                vulputate leo, non convallis urna. Mauris risus lectus, venenatis eu mi ut, pharetra vulputate metus. Praesent accumsan nisi in bibendum
                scelerisque. Ut nisl ipsum, dictum at turpis at, pulvinar lobortis nulla. Cras maximus sapien nec justo aliquet tristique. Suspendisse non sem
                massa. Vivamus posuere tellus lacus, vel malesuada lectus tincidunt vel. Suspendisse dictum elit tellus, et efficitur magna convallis id.
                Suspendisse facilisis orci non massa placerat pulvinar. In arcu mi, ultrices sit amet molestie at, mattis a dui. Vivamus ut orci nunc.
                Suspendisse augue quam, rutrum vel ipsum eu, elementum accumsan sem. Nunc elit leo, viverra quis risus vel, sagittis lobortis quam. Vivamus
                sollicitudin molestie ultricies. Mauris faucibus vitae arcu nec porttitor. Sed faucibus leo mattis enim bibendum, sed ultrices metus suscipit.
                Duis a commodo felis, volutpat ornare nunc. Sed venenatis purus lacus, ut molestie eros tristique eget. Aliquam erat volutpat. Aliquam sodales
                diam ac faucibus pretium. Aenean condimentum arcu id volutpat ornare. Pellentesque vulputate est sed elit tempus consectetur. Proin fermentum,
                nulla sollicitudin rutrum malesuada, sapien diam ornare turpis, at porttitor metus mauris sed purus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Proin felis augue, ornare sit amet sem vel, viverra convallis nunc. Praesent ut metus
                quis odio laoreet tempus. Cras a ex sed nisi sollicitudin luctus et a sapien. Aenean ultricies nisl ut dui gravida rhoncus. Proin iaculis turpis
                nec ipsum varius laoreet. Pellentesque nec erat laoreet, elementum elit non, tempus ex. Phasellus auctor, massa in viverra fringilla, dolor nisl
                sollicitudin enim, non congue lectus nisl vitae nunc. Praesent ex urna, condimentum et mollis sit amet, consectetur vitae urna. Nulla consequat
                lectus a nunc varius, et elementum est cursus. Praesent imperdiet justo sed enim commodo, in varius velit laoreet. Nullam viverra dui ligula,
                sed dictum nunc pellentesque ac. Nulla auctor aliquet sodales. Morbi consectetur varius ex vel feugiat. Vestibulum ut lacinia purus. Donec felis
                urna, dictum eget ante at, hendrerit fringilla tortor. Nulla vel quam vitae urna dignissim tempus. Vestibulum tristique placerat nisi, at
                accumsan magna pulvinar id. Ut dignissim nulla eget tortor tempor, a hendrerit nibh dignissim. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas
                varius ligula tortor, id ultrices metus pretium nec. Vestibulum sodales ornare.
            </div>
            <div className="w-full flex justify-center">
                <Button onClick={() => console.log("valudation")}>Valider</Button>
            </div>
        </div>
    );
};
