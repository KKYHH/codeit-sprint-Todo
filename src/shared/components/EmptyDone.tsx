import Image from 'next/image';
import DoneCharacter from '@devShared/images/DoneCharacter.png';
import Done from '@devShared/images/Done.png';

export default function EmptyDone() {
    return (
        <div>
            <Image src={Done} width={100} height={100} alt="img" />
            <div className="pl-36 pt-10">
                <Image src={DoneCharacter} width={250} height={250} alt="img" />
                <p className="text-slate-300 pt-4">아직 다 한 일이 없어요.</p>
                <p className="text-slate-300">해야 할 일을 체크해보세요!</p>
            </div>
        </div>
    );
}
