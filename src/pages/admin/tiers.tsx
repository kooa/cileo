import { Tiers } from "@prisma/client";
import Table, { ColumnState } from "../../components/Table";
import AdminLayout from "../../layouts/AdminLayout";
import { db } from "../../prisma";
import { toJson } from "../../tools/tools";

interface TiersProps {
  tiers?: Tiers[];
}

const columns :ColumnState[] = [
  { key: "raisonSociale",label:"Raison sociale" },
  { key: "adresse", label:"Adresse" },
  { key: "codePostal", label:"Code postal" },
  { key: "ville",label:"Ville" },
  { key: "tel",label:"Tel" },
  { key: "email",label:"Email" },
];

export default function TiersPage({ tiers }:TiersProps ) {
  return (
    <AdminLayout>
      <div className="pt-10 pb-2">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-grow text-3xl font-bold leading-tight text-gray-900">
                Accueil
              </h1>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="py-6">
              <div className="mt-8">
                <Table columns={columns} datas={tiers} onEdit={onEdit} onDelete={onDelete} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </AdminLayout>
  );
}

function onCreate () {
}

function onEdit () {
}

function onDelete(tiersId:number){
  console.log('delete',tiersId);
   db.tiers.delete({where:{id:tiersId}})
}

export async function getServerSideProps() {
  // reste à filtrer sur les tiers reliés à l'utilisateur connecté via le lien TIersUser
  const tiers = await db.tiers.findMany();
  const dataTiers = toJson(tiers);
  return {
    props: {
      tiers: dataTiers,
    },
  };
}
