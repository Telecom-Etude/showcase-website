"use client";

import { Button, VariantLink } from "@/components/ui/button";
import { LocaleParams } from "@/locales/config";
import { nav } from "@/locales/routing";
import { IoClose } from "react-icons/io5";

export default function Page({ params: { locale } }: LocaleParams) {
    return (
        <div>
            <div className="space-y-4">
                <div className="flex justify-between items-center space-x-4">
                    <p className="truncate">
                        Some very very very very very very very very very very very very very very very very very very very very long title
                    </p>
                    <VariantLink variant="call2action" btnCn="min-w-0 aspect-square rounded-full" href={nav(locale, "/validate-blog")}>
                        <IoClose className="w-4 h-4" />
                    </VariantLink>
                </div>
                <div className="text-justify">
                    Sapien donec nisi mi per risus est mollis a id vestibulum ad nisl luctus platea nullam quis adipiscing. Etiam eu parturient non faucibus
                    lacinia ad varius adipiscing placerat libero imperdiet himenaeos massa parturient parturient id. Condimentum a accumsan mi parturient et in
                    est donec aliquam aptent adipiscing in aliquam a vel. Eleifend libero orci adipiscing magnis nostra venenatis sit a ullamcorper condimentum
                    mus adipiscing etiam vulputate at ac adipiscing. Leo felis nec sagittis vestibulum ultrices vestibulum ultrices magnis id scelerisque
                    lacinia blandit a ad dui mollis ut. Adipiscing nulla suspendisse lacus sagittis phasellus vestibulum potenti posuere suspendisse duis
                    facilisi vel posuere placerat. Dignissim himenaeos condimentum parturient a ridiculus nisl tristique parturient leo interdum nec consequat
                    ornare in nunc venenatis mauris habitasse. Sociis dapibus lacinia feugiat sapien nisl adipiscing orci velit montes elementum vehicula ornare
                    leo taciti enim ultrices nunc sociis ad tristique a hac convallis. Vestibulum augue suspendisse ac parturient habitasse a orci ullamcorper a
                    sapien porta a tellus praesent a proin porttitor erat a nunc nunc suspendisse feugiat netus ullamcorper. Condimentum vestibulum duis dolor
                    cras tincidunt penatibus feugiat est adipiscing nascetur a mus a odio ipsum quam parturient in primis est nunc adipiscing augue lobortis
                    ipsum dis accumsan vestibulum. Ullamcorper aptent sit scelerisque quis mi arcu gravida bibendum magna parturient diam parturient parturient
                    curae non iaculis porttitor natoque aenean natoque gravida habitasse a vestibulum a. Vestibulum eleifend suspendisse dolor non lacus a arcu
                    sem a potenti suspendisse a adipiscing pulvinar eu varius vehicula id praesent augue. Parturient dignissim scelerisque cursus lorem mi nulla
                    diam molestie penatibus curabitur imperdiet ut primis pretium nisi tellus. Quisque ac a diam posuere mus condimentum a himenaeos vel
                    parturient vehicula cras velit condimentum urna pulvinar vestibulum est enim convallis egestas integer id. Inceptos lacus non a gravida
                    tempus a class vitae adipiscing risus semper conubia sed montes parturient vestibulum dis ultrices porta vel ac. Mus fermentum est et
                    pharetra tempus augue etiam leo a elit dolor integer nunc parturient aptent hac eget semper proin consequat. Praesent mi scelerisque orci a
                    ornare litora ac vel parturient varius ridiculus blandit metus quam pharetra adipiscing sit a amet parturient malesuada sagittis sapien
                    dolor scelerisque dui suspendisse. At a a a maecenas venenatis commodo magnis primis a ornare felis per condimentum proin vulputate nunc
                    ridiculus in nisl a in adipiscing placerat fringilla a orci parturient. Vestibulum gravida amet a a a magnis vitae a aliquet ullamcorper et
                    commodo mattis inceptos in ligula mollis a a himenaeos fames vestibulum nisl ante. A semper magna etiam proin condimentum vestibulum a
                    ornare parturient a phasellus nulla morbi nec. Mi at natoque mi enim id vestibulum sed orci vestibulum iaculis vestibulum ullamcorper cum id
                    odio blandit curae diam condimentum hendrerit interdum condimentum ac senectus. Fusce urna tincidunt habitasse etiam consectetur consectetur
                    class id per purus magna sem dictum nisi nulla penatibus. Morbi felis senectus justo diam a sagittis et ac odio dui natoque id quisque
                    tristique sociis purus varius. Risus scelerisque potenti facilisis eget ornare a mollis a suspendisse enim fusce leo ut sed cum scelerisque
                    quam a vestibulum velit suspendisse non fringilla ante. Pretium nascetur cras porttitor leo cum dictum conubia imperdiet malesuada
                    consectetur facilisis ad ad vestibulum dis parturient parturient facilisi leo nec a ullamcorper a a torquent adipiscing vehicula. Sed
                    adipiscing tristique nec parturient ullamcorper fusce vel mi sodales eros habitasse aliquam interdum nec eu sociis vel auctor cum hac sit
                    facilisi ad a interdum. Bibendum sociis purus at augue vivamus vestibulum ac lacinia vivamus platea tortor sem sodales elementum ligula mi
                    ipsum pulvinar orci luctus. Senectus a vestibulum arcu id condimentum consectetur sem ut suspendisse taciti sit metus condimentum phasellus
                    facilisi a. Dui malesuada a congue faucibus nulla consectetur aliquet nascetur per ultricies sed a cubilia taciti parturient vestibulum a
                    dictumst feugiat vestibulum parturient non fames consectetur nibh velit curabitur elementum. Eget himenaeos quis adipiscing at vestibulum
                    cubilia morbi leo vestibulum a ante justo lectus suspendisse pretium ut. Adipiscing parturient consectetur eget in class ac scelerisque
                    consectetur ullamcorper feugiat nullam condimentum facilisi malesuada scelerisque praesent suspendisse tincidunt a adipiscing vivamus
                    venenatis ligula convallis massa a. Fames ridiculus vestibulum ipsum vestibulum netus parturient interdum maecenas congue a vivamus curae
                    commodo integer sociosqu. Cum nostra cum sem vel erat dis habitasse eu sociosqu per a eu mi suspendisse gravida commodo orci suspendisse
                    malesuada vestibulum vel ac ornare nostra augue tincidunt. Sodales non eu blandit scelerisque a a pulvinar mauris quis vulputate ipsum a a
                    parturient nisi ultrices a pharetra a eu himenaeos diam. Placerat scelerisque auctor augue turpis euismod ultricies odio vestibulum
                    fermentum a pretium vestibulum augue posuere fringilla auctor a vestibulum mi a netus a id viverra mollis nostra per. Ut suspendisse eget
                    gravida ultricies a dis mattis a libero nisi rhoncus ut ullamcorper volutpat a risus elementum vitae curae vehicula felis. Conubia accumsan
                    metus posuere vestibulum ut mi venenatis potenti magna commodo in at at fringilla sed placerat ipsum et phasellus adipiscing vestibulum nibh
                    quis sed vestibulum. Velit a quam duis risus rhoncus adipiscing primis luctus convallis inceptos iaculis adipiscing cras lectus posuere
                    etiam. Elit ligula netus mi a congue sapien bibendum a sit donec aliquam lectus ut curae. Lacus id a suscipit risus rhoncus cursus at
                    condimentum platea et iaculis adipiscing consectetur at parturient sociosqu dignissim scelerisque a condimentum parturient dui sed ac ac
                    porttitor hac. Sed vivamus eu est suspendisse cubilia condimentum quam dignissim adipiscing a quis nibh nam parturient suspendisse aliquam
                    ligula dui mus habitant a curabitur bibendum. Risus libero interdum non eros dolor parturient cursus tortor a vestibulum venenatis facilisi
                    rhoncus consectetur lacinia nisl condimentum pretium in ullamcorper cum proin. Suspendisse scelerisque curae aliquet a nec senectus pulvinar
                    vestibulum neque urna fermentum vestibulum dui mus in senectus. Vestibulum maecenas phasellus a leo cursus mollis id porta per mi sociosqu
                    nunc fermentum laoreet mus nostra mauris venenatis a libero condimentum a fames tortor vestibulum parturient eros.
                </div>
            </div>
            <div className="w-full flex justify-center p-4">
                <Button onClick={() => console.log("validation")}>Valider</Button>
            </div>
        </div>
    );
}
