import { Separator } from "@/components/ui/separator";

export default function Forbidden() {
    return (
        <div className="flex space-x-10">
            <p>401</p>
            <Separator orientation="vertical" />
            <p>Forbidden</p>
        </div>
    );
}
