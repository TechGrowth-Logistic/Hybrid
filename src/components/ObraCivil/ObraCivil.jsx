import React from 'react';
import { Link } from 'react-router-dom';

export default function ObraCivil() {
    const serviciosObraCivil = [
        {
            title: "Canalización Subterránea y Zanjado",
            desc: "Excavación, microzanjado y colocación de ductos de PEAD/PVC para protección de redes de telecomunicaciones.",
            icon: "construction"
        },
        {
            title: "Construcción de Registros y Posos",
            desc: "Fabricación e instalación de registros prefabricados o colados en sitio conforme a especificaciones normativas.",
            icon: "foundation"
        },
        {
            title: "Cimentaciones y Montaje de Torres",
            desc: "Bases de concreto, anclajes y preparación de sitios técnicos para infraestructura de microondas y radiobases.",
            icon: "cell_tower"
        },
        {
            title: "Hincado de Postes y Pasos Aéreos",
            desc: "Colocación de postería de concreto/madera y preparación de infraestructura aérea con grúa/hiab propia.",
            icon: "precision_manufacturing"
        },
        {
            title: "Rehabilitación de Superficies",
            desc: "Reposición de carpeta asfáltica, concreto hidráulico y banquetas garantizando cero afectaciones al entorno vial.",
            icon: "format_paint"
        },
        {
            title: "Seguridad Vial y Normativa SCT",
            desc: "Delimitación con señalización reflectiva, EPP completo para cuadrillas y cumplimiento riguroso de permisos.",
            icon: "traffic"
        }
    ];

    return (
        <div className="w-full transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen">

            {/* 1. HERO BANNER DE OBRA CIVIL */}
            <section className="relative w-full h-[55vh] min-h-[480px] max-h-[650px] flex items-center justify-start overflow-hidden px-6 md:px-16 border-b border-slate-200 dark:border-slate-800">

                {/* IMAGEN DE FONDO */}
                <img
                    src="/obra-civil-hero.png"
                    alt="Obra Civil en Telecomunicaciones"
                    className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80 dark:opacity-75 transition-all duration-300"
                />

                {/* OVERLAY PARA DAR LECTURA SOBRE LA FOTO */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-transparent z-10" />

                {/* CONTENIDO PERSUASIVO SOBRE LA IMAGEN */}
                <div className="relative z-20 max-w-3xl space-y-4">
                    <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 backdrop-blur-sm">
                        Infraestructura Pesada & Canalización
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Obra Civil <span className="text-blue-500">Especializada</span>
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base max-w-xl leading-relaxed">
                        Construcción de infraestructura subterránea y aérea con maquinaria propia, personal certificado y entrega de sitios en tiempo récord.
                    </p>
                    <div className="pt-2">
                        <Link
                            to="/contacto"
                            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95"
                        >
                            Solicitar Levantamiento
                        </Link>
                    </div>
                </div>

            </section>

            {/* 2. GRILLA DE SERVICIOS TÉCNICOS DE OBRA CIVIL */}
            <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto space-y-16">

                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Soluciones Integrales de Campo
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                        Contamos con el equipamiento y cuadrillas capacitadas para ejecutar proyectos de canalización urbana e interurbana minimizando afectaciones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviciosObraCivil.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-200 shadow-sm dark:bg-slate-900/90 dark:border-slate-800 dark:shadow-none hover:border-blue-500/50 dark:hover:border-blue-500/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 3. SECCIÓN DE MAQUINARIA Y SEGURIDAD EN SITIO */}
                <div className="bg-gradient-to-br from-slate-100 to-blue-50/60 border border-slate-200/80 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 dark:border-slate-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-sm dark:shadow-none">

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-500/20 dark:border-blue-400/30 dark:text-blue-300 rounded-full text-xs font-semibold">
                            <span>Capacidad Operativa</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                            Maquinaria Propia y Cero Riesgos Operativos
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                            El uso de maquinaria especializada nos permite cumplir plazos ajustados y mantener el estándar de calidad que exigen las grandes operadoras de México.
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300 pt-2">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Camiones Hiab / Grúas
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Zanjadoras / Cortadoras
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Equipos de Apisonado
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-600 dark:text-blue-500 font-bold">✓</span> Planta de Soldadura
                            </div>
                        </div>
                    </div>

                    {/* TARJETA DE ACCIÓN Y PROSPECTACIÓN */}
                    <div className="bg-white border border-slate-200 shadow-sm dark:bg-slate-950/80 dark:border-slate-800 dark:shadow-none p-8 rounded-2xl text-center space-y-6">
                        <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-500">engineering</span>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                            ¿Tienes una licitación o proyecto de obra civil?
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                            Solicita una cotización o visita técnica para evaluar levantamiento de ruta y volumen de obra.
                        </p>
                        <Link
                            to="/contacto"
                            className="inline-block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-95"
                        >
                            Solicitar Cotización de Obra
                        </Link>
                    </div>

                </div>

            </section>

        </div>
    );
}